import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { match, P } from "ts-pattern";

const ErrorBoundary = () => {
  const error = useRouteError();
  const renderContent = match({ error })
    .with(
      {
        error: P.when(
          (error) => isRouteErrorResponse(error) && error.status === 404
        ),
      },
      () => <div>url not found</div>
    )
    .with(
      {
        error: P.when(
          (error) => isRouteErrorResponse(error) && error.status === 401
        ),
      },
      () => <div>not Authorized</div>
    )
    .with(
      {
        error: P.when(
          (error) => isRouteErrorResponse(error) && error.status === 413
        ),
      },
      () => <div>Payload too large</div>
    )
    .otherwise(() => <div>error status not found</div>);

  return renderContent;
};

export default ErrorBoundary;
