import { defineStore } from 'pinia';
import {
  Project,
  useProjectsQuery,
  useProjectQuery,
  useRemoveProjectMutation,
  useSaveProjectMutation,
} from 'src/graphql/generated/operations';
import { ref, watch } from 'vue';
import {cloneDeep} from 'lodash';
import { ApolloError } from '@apollo/client';

export const useProjectStore = defineStore('project', () => {
  const project = ref({} as Project);
  const projects = ref([] as Project[]);
  const loading = ref(false);
  const error = ref(null as string | null);

  const openDialog = ref(false);
  const viewOnly = ref(false);

  const loadProject = async (projectId: string) => {
    const { result, loading: localLoading } = useProjectQuery({ projectId });

    project.value = result.value?.project as Project;
    loading.value = localLoading.value;
  };

  const loadProjects = async () => {
    const {
      result,
      loading: localLoading,
      onError,
    } = useProjectsQuery(
      {
        fetchPolicy: 'no-cache',
      }
    );

    loading.value = localLoading.value;

    watch(result, (newValue) => {
      projects.value = cloneDeep(newValue?.projects as Project[]);
      loading.value = false;
    });

    onError((graphQLError: Error) => {
      error.value = graphQLError.message;
    });
  };


  const saveProject = async () => {
    const projectToSave = project.value;

    const { mutate, onError } = useSaveProjectMutation({
      variables: {
        project: {
          id: projectToSave.id,
          description: projectToSave.description,
          clientCreatorId: projectToSave.clientCreator?.id,
          name: projectToSave.name,
          usersIds: projectToSave.users?.map((user) => user.id),
        },
      },
    });

    onError((error: ApolloError) => {
      throw error;
    });

    await mutate();
  };

  const removeProject = async () => {
    const { mutate, onError } = useRemoveProjectMutation({
      variables: {
        projectId: project.value?.id,
      },
    });

    onError((error: ApolloError) => {
      throw error;
    });

    await mutate();
  };

  return {
    projects,
    project,
    loading,
    error,
    openDialog,
    loadProject,
    viewOnly,
    loadProjects,
    saveProject,
    removeProject,
  };
});
