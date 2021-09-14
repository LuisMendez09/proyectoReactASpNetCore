//agrear validacion personalizada a yup para poder utilizarla en los formularios

import { StringSchema } from "yup";

declare module 'yup'{
    class StringSchema{
        primeraLetraMayuscula():this;
    }
}