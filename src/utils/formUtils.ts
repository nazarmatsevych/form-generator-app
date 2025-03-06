import { ETabs, FormConfig } from "../types/formTypes.ts";

export const applyConfig = (
  jsonConfig: string | null,
  setFormConfig: (config: FormConfig) => void,
  setActiveTab: (tab: ETabs) => void
) => {
  if (!jsonConfig) {
    alert("JSON config is empty");
    return;
  }

  try {
    const parsedConfig = JSON.parse(jsonConfig);

    if (!parsedConfig.fields || !Array.isArray(parsedConfig.fields)) {
      alert("Invalid JSON format: 'fields' is missing or not an array");
      return;
    }

    setFormConfig(parsedConfig);
    setActiveTab(ETabs.RESULT);
  } catch (error) {
    alert("Invalid JSON format");
  }
};
