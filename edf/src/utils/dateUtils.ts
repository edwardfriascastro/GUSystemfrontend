import format from 'date-fns/format';
import { parse } from 'date-fns';
import { Maybe } from 'src/graphql/generated/operations';
import { es } from 'date-fns/locale';

export function formatSimple(date: Maybe<Date> | undefined): string {
  if (!date) {
    return '';
  }

  return format(date, 'dd/MM/yyyy');
}

export function formatReadable(date: Maybe<Date> | undefined): string {
  if (!date) {
    return '';
  }

  return format(date, "dd 'de' MMMM 'de' yyyy", { locale: es });
}

export function formatLegal(date: Maybe<Date> | undefined): string {
  if (!date) {
    return '';
  }

  return format(date, "'en el día' d 'del mes de' MMMM 'del año' yyyy", {
    locale: es,
  });
}

export function formatToQuasarDate(date: Maybe<Date> | undefined): string {
  if (!date) {
    return '';
  }

  return format(date, 'yyyy-MM-dd');
}

export function parseSimple(date: string): Date {
  return parse(date, 'dd/MM/yyyy', new Date());
}

export function parseFromQuasarDate(date: string): Date {
  return parse(date, 'yyyy-MM-dd', new Date());
}

export const esLocale = {
  days: 'Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado'.split('_'),
  daysShort: 'Dom_Lun_Mar_Mié_Jue_Vie_Sáb'.split('_'),
  months:
    'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split(
      '_'
    ),
  monthsShort: 'Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic'.split('_'),
  firstDayOfWeek: 1,
  format24h: true,
  pluralDay: 'dias',
};
