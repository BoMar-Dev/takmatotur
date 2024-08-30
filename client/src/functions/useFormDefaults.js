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
    // Set a different maxLength for the 'message' field or remove it
    const isMessageField = name === "message";
    const fieldMaxLength = isMessageField ? 800 : 50; // Allow 1000 characters for the message field

    return {
      name,
      value: formData[name] || "",
      placeholder,
      required: true,
      autoComplete: "on",
      maxLength: fieldMaxLength,
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
