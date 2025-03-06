import { useState } from "react";
import { create } from "zustand";
import {
  Card,
  CardContent,
  Tabs,
  Tab,
  Button,
  TextField,
  Switch,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Typography,
} from "@mui/material";

import { ConfigState, FormConfig, ETabs, EFieldType } from './types/formTypes.ts';
import { applyConfig } from './utils/formUtils.ts';
import "./App.css";

const useConfigStore = create<ConfigState>((set) => ({
  jsonConfig: "",
  setJsonConfig: (config) => set({ jsonConfig: config }),
}));

function App() {
  const { jsonConfig, setJsonConfig } = useConfigStore();
  const [formConfig, setFormConfig] = useState<FormConfig | null>(null);
  const [activeTab, setActiveTab] = useState(ETabs.CONFIG);

  return (
    <div className="container">
      <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue)}>
        <Tab className="tab" label="Config" />
        <Tab className="tab" label="Result" disabled={!formConfig} />
      </Tabs>

      {activeTab === ETabs.CONFIG && (
        <div className="config-section">
          <TextField
            fullWidth
            multiline
            rows={12}
            variant="outlined"
            value={jsonConfig}
            onChange={(e) => setJsonConfig(e.target.value)}
            placeholder="Enter JSON configuration here..."
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => applyConfig(jsonConfig, setFormConfig, setActiveTab)}
            className="apply-button"
          >
            Apply Config
          </Button>
          <Typography variant="body2" color="textSecondary" component="div" className="info-text">
            <p>Hint: The JSON configuration might include:</p>
            <ul>
              <li><strong>title</strong> — The form title (string).</li>
              <li><strong>fields</strong> — An array of fields, where each field has:
                <ul>
                  <li><strong>name</strong> — A unique field name.</li>
                  <li><strong>label</strong> — The field label.</li>
                  <li><strong>type</strong> — The field type (string, number, multi-line, boolean, date, enum).</li>
                  <li><strong>options</strong> (for enum) — An array of possible values.</li>
                </ul>
              </li>
              <li><strong>buttons</strong> — An array of button labels.</li>
            </ul>
          </Typography>
        </div>
      )}

      {activeTab === ETabs.RESULT && formConfig && (
        <Card className="result-card">
          <CardContent>
            <h2 className="form-title">{formConfig.title}</h2>
            <form>
              {formConfig.fields.map((field) => (
                <div key={field.name} className="form-field">
                  <FormLabel>{field.label}</FormLabel>
                  {field.type === EFieldType.STRING && <TextField fullWidth variant="outlined" />}
                  {field.type === EFieldType.NUMBER && <TextField fullWidth type="number" variant="outlined" />}
                  {field.type === EFieldType.MULTI_LINE && <TextField fullWidth multiline rows={3} variant="outlined" />}
                  {field.type === EFieldType.BOOLEAN && (
                    <FormControlLabel control={<Switch />} label={field.label} />
                  )}
                  {field.type === EFieldType.DATE && <TextField fullWidth type="date" variant="outlined" />}
                  {field.type === EFieldType.ENUM && field.options && (
                    <FormControl component="fieldset">
                      <RadioGroup>
                        {field.options?.map((option) => (
                          <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  )}
                </div>
              ))}
              <div className="button-group">
                {formConfig.buttons?.map((btn) => (
                  <Button key={btn} variant="contained" color="primary" className="form-button">
                    {btn}
                  </Button>
                ))}
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default App;
