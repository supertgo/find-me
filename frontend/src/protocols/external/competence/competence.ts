export type Competence = {
  id: number;
  name: string;
  description: string | null;
  created_at: string;
  updated_at: string;
  type: string;
};

export type PostAddCompetenceBody = {
  competences: { name: string}[]
}

export type DeleteCompetenceBody = {
	competences_id: number[];
};


