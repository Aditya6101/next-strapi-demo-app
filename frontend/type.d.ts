type Attribute = {
  username: string;
  answername: string;
  answers: Array<string>;
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

export type Question = {
  title: string;
  questions: sting;
};

export type ForumRes = {
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
