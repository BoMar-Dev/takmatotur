import { useState } from "react";

export function useFormDefaults(initialState = {}) {
  const [formData, setFormData] = useState(initialState);

  function defaults(
    name,
    placeholder,
    override = {},
    validator = () => true,
    invalidMessage = "Inte giltig"
  ) {
    return {
      name,
      value: formData[name] || "",
      placeholder,
      required: true,
      autoComplete: "on",
      maxLength: 50,
      type: "text",
      onChange: ({ target: t }) => {
        setFormData({ ...formData, [t.name]: t.value });
        // Validation logic
        t.setCustomValidity(validator(t.value) ? "" : invalidMessage);
      },
      ...override,
    };
  }

  return { defaults, formData, setFormData };
}
