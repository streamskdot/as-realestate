"use server";

import nodemailer from "nodemailer";

const DUMMY_EMAIL = "dummy@as-realestate.jp";

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const furigana = formData.get("furigana") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: DUMMY_EMAIL,
    subject: `【お問い合わせ】${name} 様より`,
    text: [
      `お名前: ${name}`,
      `ふりがな: ${furigana}`,
      `メールアドレス: ${email}`,
      `御社名: ${company || "未入力"}`,
      `電話番号: ${phone}`,
      "",
      "【お問い合わせ内容】",
      message,
    ].join("\n"),
    html: [
      `<p><strong>お名前:</strong> ${name}</p>`,
      `<p><strong>ふりがな:</strong> ${furigana}</p>`,
      `<p><strong>メールアドレス:</strong> ${email}</p>`,
      `<p><strong>御社名:</strong> ${company || "未入力"}</p>`,
      `<p><strong>電話番号:</strong> ${phone}</p>`,
      `<hr/>`,
      `<p><strong>お問い合わせ内容:</strong></p>`,
      `<p>${message.replace(/\n/g, "<br/>")}</p>`,
    ].join("\n"),
  });

  return { success: true };
}
