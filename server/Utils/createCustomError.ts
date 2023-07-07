export default function (
  field: string = "",
  message: string = `${field} must exist and can not be empty`
) {
  throw createError({
    message: message,
    statusCode: 400,
    statusMessage: "Bad Request",
  });
}
