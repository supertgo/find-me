export type JobsResponse = {
  data: Job[];
};

export type Job = {
  id: number;
  name: string;
  description: string;
  is_available: boolean;
  applications_amount: number;
  salary: number;
  salary_time_unit: SalaryTimeUnit;
  accept_application_until: Date;
  work_model: WorkModel;
  employment_type: EmploymentType;
  week_workload: number;
  location: string;
  company_id: number;
  created_at: Date;
  updated_at: Date;
  user_id: number;
};

export type EmploymentType = 'part-time' | 'full-time';

export type SalaryTimeUnit = 'month' | 'hour' | 'week' | 'day';

export type WorkModel = 'onSite' | 'hybrid' | 'homeOffice';
