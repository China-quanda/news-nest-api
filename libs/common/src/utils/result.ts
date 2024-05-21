export class BaseOkResult<T> {
  data: T;
  code: number;
  message: string;
}

export class BaseListResult<T> {
  list: T;
  pagination: {
    pageNum: number;
    pageSize: number;
    total: number;
  };
}

export class ResultList<T> extends BaseListResult<T> {}

// export class ResultOk<T> extends BaseOkResult<BaseListResult<T>> {}
