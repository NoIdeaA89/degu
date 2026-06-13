import { useState, useEffect } from "react"
import { useAuth } from "../../context/AuthContext"
import { obtenerMetricasDashboard } from "../../services/metricas.service"
import type { MetricasDashboard } from "../../interfaces/MetricasDashBoard"

export function useMetricas() {
  const { user } = useAuth();
  const [metricas, setMetricas] = useState<MetricasDashboard | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMetricas = async () => {
      try {
        const data = await obtenerMetricasDashboard();
        setMetricas(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (user?.rol === 'Administrador') fetchMetricas();
    else setIsLoading(false);
  }, [user]);

  return { metricas, isLoading, error };
}