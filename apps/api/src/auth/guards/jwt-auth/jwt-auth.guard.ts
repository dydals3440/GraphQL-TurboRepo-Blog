import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express'; // Express Request 타입 사용

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext): Request {
    // GraphQL 요청 컨텍스트 변환
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext<{ req: Request }>().req;
  }
}
