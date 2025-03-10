import { notFound } from 'next/navigation';
import JobPostingCard from './job-posting-card';

async function fetchJob(jobId: string) {
  const res = await fetch(
    `https://apis.codante.io/api/job-board/jobs/${jobId}?slow=true`
  );
  if (!res.ok) return undefined;
  const data = await res.json();
  return data.data;
}

export default async function JobDetails({ jobId }: { jobId: string }) {
  const job = await fetchJob(jobId);

  if (!job) {
    notFound();
  }

  return <JobPostingCard job={job} />;
}
