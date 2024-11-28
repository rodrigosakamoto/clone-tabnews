import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);

  const responseBody = await response.json();

  return responseBody;
}

export default function StatusPage() {
  return (
    <div>
      <h1>Status</h1>
      <UpdatedAt />
      <DatabaseStatus />
    </div>
  );
}

function UpdatedAt() {
  const { data, isLoading } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let updatedAtText = "Carregando...";

  if (!isLoading && data) {
    updatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");
  }

  return <div>Última atualização: {updatedAtText}</div>;
}

function DatabaseStatus() {
  const { data, isLoading } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  return (
    <>
      <h2>Database</h2>
      {isLoading && !data ? (
        <div>Carregando...</div>
      ) : (
        <>
          <div>Versão: {data.dependencies.database.version}</div>
          <div>
            Conexões abertas: {data.dependencies.database.open_connections}
          </div>
          <div>
            Conexões máximas: {data.dependencies.database.max_connections}
          </div>
        </>
      )}
    </>
  );
}
