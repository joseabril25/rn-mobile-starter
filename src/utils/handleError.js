const defaultError = {
  code: 'error',
  message: 'Something went wrong',
};

const handleMessageError = (code) => {
  switch (code) {
    case 'invalid_email': {
      return {
        code: 'invalid_email',
        message: 'Incorrect email address',
      };
    }
    case 'incorrect_password': {
      return {
        code: 'invalid_password',
        message: 'Incorrect password',
      };
    }
    case 'error_invalid_permission': {
      return {
        code: 'invalid_email',
        message: 'Please upgrade your account',
      };
    }
    default:
      return null;
  }
};

const handleStringCodeError = (code) => {
  switch (code) {
    case 'name_already_exists':
      return {
        code: 'name_already_exists',
        message: 'This title is not available',
      };
    default:
      return {
        code: 'undefined',
        message: code,
      };
  }
};

export default (error) => {
  const apiResponse = error?.response;
  const { message } = error;

  if (apiResponse) {
    const { status, data } = apiResponse;
    if (status === 404) {
      return {
        code: 'not_found',
        message: data?.message,
      };
    }
    if (data?.message) {
      const errorMessage = handleMessageError(data.message);
      if (errorMessage) {
        return errorMessage;
      }
    }
    if (data && typeof data === 'string') {
      return handleStringCodeError(data);
    }
    if (status === 401) {
      return {
        code: 'unauthorized',
        message: 'User have no access to deal tracker',
      };
    }
  }

  if (message?.includes('timeout')) {
    return {
      code: 'network_timeout',
      message: 'Request timeout exceeded',
    };
  }

  return defaultError;
};
