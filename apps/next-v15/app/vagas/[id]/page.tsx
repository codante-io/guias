import JobDetails from './job-details';

export default async function JobPosting({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const jobId = (await params).id;

  return (
    <div className="container mx-auto max-w-4xl p-4">
      <div className="mb-6">
        <Link
          href="/vagas"
          className="text-muted-foreground hover:text-foreground inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Todas as Vagas
        </Link>
      </div>
      <Suspense fallback={<div>Carregando detalhes da vaga...</div>}>
        <JobDetails jobId={jobId} />
      </Suspense>
      <Suspense fallback={<div>Carregando comentários...</div>}>
        <Comments jobId={jobId} />
      </Suspense>
    </div>
  );
}
