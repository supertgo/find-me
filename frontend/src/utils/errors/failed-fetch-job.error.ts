class FailedToFetchJobError extends Error {
	constructor(message?: string) {
		super(message || 'Failed to fetch job applications');
		this.name = 'FailedToFetchJobError';
	}
}
