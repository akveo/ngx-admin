export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  avatarUrl?: string;
  createdAt: string;
}
