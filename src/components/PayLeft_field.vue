<template>
  <div class="field-info-left">
    <div class="field" v-for="field in fields" :key="field.id">
      <label :for="field.id">{{ field.label }}</label>
      <InputField
        :id="field.id"
        v-model="formData[field.model]"
        :placeholder="field.placeholder"
        :type="field.type"
      />
    </div>
    <div class="check-container">
      <input type="checkbox" id="terms" v-model="formData.terms" />
      <label for="terms">Accept terms and conditions</label>
    </div>
  </div>
</template>
<script>
import InputField from "@/components/InputField.vue";

export default {
  components: {
    InputField,
  },
  data() {
    return {
      formData: {
        firstName: "",
        companyName: "",
        streetAddress: "",
        apartment: "",
        city: "",
        phone: "",
        email: "",
        terms: false,
      },
      fields: [
        {
          id: "first-name",
          label: "First Name*",
          model: "firstName",
          placeholder: "Enter your first name",
          type: "text",
        },
        {
          id: "company-name",
          label: "Company Name*",
          model: "companyName",
          placeholder: "Enter your company name",
          type: "text",
        },
        {
          id: "street-address",
          label: "Street Address*",
          model: "streetAddress",
          placeholder: "Enter your street address",
          type: "text",
        },
        {
          id: "apartment",
          label: "Apartment, floor, etc. (optional)",
          model: "apartment",
          placeholder: "Enter apartment details",
          type: "text",
        },
        {
          id: "city",
          label: "Town/City*",
          model: "city",
          placeholder: "Enter your city",
          type: "text",
        },
        {
          id: "phone",
          label: "Phone Number*",
          model: "phone",
          placeholder: "Enter your phone number",
          type: "tel",
        },
        {
          id: "email",
          label: "Email Address*",
          model: "email",
          placeholder: "Enter your email address",
          type: "email",
        },
      ],
    };
  },
};
</script>
<style scoped>
.field{
display: flex;
flex-direction: column;
gap: 8px;
}
.check-container{
  display: flex;
  align-items: center;
  gap: 16px;
}
input[type="checkbox"] {
  accent-color: rgb(83, 83, 83);
  width: 20px;
  height: 20px;
}
.field-info-left{
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>