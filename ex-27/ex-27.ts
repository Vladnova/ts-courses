//  Потрібно типізувати запит та відповідь на цей запит,
// приклад запиту і відповіді у json файлі

// мій код

interface Request {
  sum: number;
  from: number;
  to: number;
}

interface DataFailed {
  errorMessage: string;
  errorCode: number;
}

interface DataSuccess extends Request {
  databaseId: number;
}

interface Response {
  statusR: "success" | "failde";
  data: DataSuccess | DataFailed;
}

//  код викладача

interface IPaymant {
  sum: number;
  from: number;
  to: number;
}

interface IPaymantRequest extends IPaymant {}

interface IDataSuccess extends IPaymant {
  databaseId: number;
}

interface IDataFaild {
  errorMessage: string;
  errorCode: number;
}

enum PaymantStatus {
  Success = "success",
  Failed = "failed",
}

interface IResponseSuccess {
  status: PaymantStatus.Success;
  data: IDataSuccess;
}

interface IResponseFailed {
  status: PaymantStatus.Failed;
  data: IDataFaild;
}

/*і тоді ми вказуємо, що наша функція буде повертати union з  двох 
інтерфейсів, якщо успішно то IResponseSuccess, якщо помилка 
то IResponseFailed, і ми зможемо написати тоді у фенкції тайп гвард*/
function getSomething(): IResponseSuccess | IResponseFailed {
  return {
    status: PaymantStatus.Success,
    data: {
      databaseId: 1256,
      sum: 10000,
      from: 2,
      to: 4,
    },
  };
}
