import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { jwtDecode } from 'jwt-decode';

export interface User {
  id: number;
  nombre: string;
  apellido: string;
  rol: 'Administrador' | 'Profesor' | 'Ayudante' | 'Estudiante';
}

interface AuthContextType {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const decoded = jwtDecode<{ exp: number; user: User }>(token);
          const currentTime = Date.now() / 1000;

          if (decoded.exp < currentTime) {
            console.warn("El token ha expirado");
            logout();
          } else {
            setUser(decoded.user); 
          }
        } catch (error) {
          console.error("Error decodificando token", error);
          logout();
        }
      }
      setLoading(false); 
    };

    checkToken();
  }, []);

  const login = (token: string) => {
    localStorage.setItem('token', token);
    const decoded = jwtDecode<{ exp: number; user: User }>(token);
    setUser(decoded.user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};