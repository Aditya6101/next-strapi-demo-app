type Attribute = {
  username: string;
  answername: string;
  answers: string;
  createdAt: Date;
  publishedAt: Date;
  questions: string;
  title: string;
  updatedAt: Date;
};

export type dataAttr = {
  id: number;
  attributes: Attribute;
};

type ForumRes = {
  data: dataAttr[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
