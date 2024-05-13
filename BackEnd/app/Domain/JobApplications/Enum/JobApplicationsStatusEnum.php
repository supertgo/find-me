<?php

namespace App\Domain\JobApplications\Enum;

enum JobApplicationsStatusEnum: string
{
    case Pending = 'pending';
    case Approved = 'approved';
    case Rejected = 'rejected';
    case Canceled = 'canceled';
    case Hired = 'hired';
    case InProgress = 'in_progress';

    public static function getValues(): array
    {
        return array_column(self::cases(), 'value');
    }

    public static function getValuesAsString(): string
    {
        return implode(',', self::getValues());
    }

    public function isFinal(): bool
    {
        return in_array($this->value, [self::Canceled, self::Hired]);
    }
}
