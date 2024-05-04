import { EmploymentType, WorkModel } from "../job/job";

export type ProfessionalExperience = {
    id:              number;
    user_id:         number;
    company_name:    string;
    position:        string;
    description:     string;
    start_date:      string;
    end_date:        Date | null;
    is_current:      number;
    location:        string;
    work_model:      WorkModel;
    employment_type: EmploymentType;
    created_at:      Date;
    updated_at:      Date;
}
