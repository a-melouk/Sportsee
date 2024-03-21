export const parseJson = async (response) => {
  const json = await response.json();
  if (response.status === 200) {
    return {
      status: "success",
      data: json.data,
      error: undefined,
    };
  } else if (response.status === 404) {
    return {
      status: "error",
      data: undefined,
      error: "USER_NOT_FOUND",
    };
  } else {
    return {
      status: "error",
      data: undefined,
      error: "API_REQUEST_FAILED",
    };
  }
};
