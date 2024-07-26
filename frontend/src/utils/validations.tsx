import { z, ZodSchema } from 'zod';

const notEmptyError = (attr: string) => ( `Vui lòng không để trống ${attr}` )

export const signUpFormSchema: ZodSchema = z.object({
  lastname: z.string().min(1, { message: notEmptyError("họ")}),
  firstname: z.string().min(1, { message: notEmptyError("tên")}),
  gender: z.enum(["male", "female"]),
  birthday: z.string().min(1, { message: notEmptyError("sinh nhật") }),
  email: z.string().email({ message: "Vui lòng điền email hợp lệ"}),
  password: z.string().min(1, { message: notEmptyError("mật khẩu") })
})

export type SignUpFormInteface = z.infer<typeof signUpFormSchema>
