const AwsAuthConfig = {
  region: import.meta.env.VITE_AUTH_REGION as string,
  userPoolId: import.meta.env.VITE_AUTH_USER_POOL_ID as string,
  userPoolClientId: import.meta.env.VITE_AUTH_USER_POOL_WEB_CLIENT_ID as string,
  authenticationFlowType: "USER_SRP_AUTH",
};

export default AwsAuthConfig;
