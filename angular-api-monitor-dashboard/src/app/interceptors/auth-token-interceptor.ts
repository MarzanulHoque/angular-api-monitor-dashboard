import { HttpInterceptorFn } from '@angular/common/http';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  
  const token =req.headers.get('X-API-TOKEN');
  
  if(!token)
    return next(req);

  const authreq = req.clone(
    {
      headers: req.headers
      .delete('X-API-TOKEN')
      .set('Authorization', `Bearer ${token}`)
    }
  );

  return next(authreq);
  
};
