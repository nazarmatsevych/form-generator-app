export interface FieldConfig {
  name: string;
  label: string;
  type: "string" | "number" | "multi-line" | "boolean" | "date" | "enum";
  options?: string[];
}

export interface FormConfig {
  title: string;
  fields: FieldConfig[];
  buttons: string[];
}

export interface ConfigState {
  jsonConfig: string | null;
  setJsonConfig: (config: string | null) => void;
}

export enum ETabs {
  CONFIG = 0,
  RESULT = 1,
}

export enum EFieldType {
  STRING = "string",
  NUMBER = "number",
  MULTI_LINE = "multi-line",
  BOOLEAN = "boolean",
  DATE = "date",
  ENUM = "enum",
}

