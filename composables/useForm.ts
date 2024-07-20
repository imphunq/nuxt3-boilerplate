import { ElForm } from "#build/components";

export const useForm = <T>(initialForm: T) => {
  const form: Ref<T> = ref({...initialForm}) as Ref<T>
  const formRef = ref<InstanceType<typeof ElForm>>()

  const handleSubmit = (onValid: (form: T) => void, onInvalid: () => void) => {
    formRef.value?.validate((valid: boolean) => {
      if (valid) {
        onValid(form.value)
      } else {
        console.log('error submit!!')
        onInvalid()
      }
    })
  }

  const resetForm = () => {
    formRef.value?.resetFields()
  }

  return {
    formRef,
    form,
    handleSubmit,
    resetForm
  }
}
