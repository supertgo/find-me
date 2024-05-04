export type AcademicRecord = {
    id:             number;
    user_id:        number;
    institution:    string;
    degree:         string;
    field_of_study: string;
    start_date:     Date;
    end_date:       null;
    is_in_progress: number;
    description:    string;
    created_at:     Date;
    updated_at:     Date;
}
