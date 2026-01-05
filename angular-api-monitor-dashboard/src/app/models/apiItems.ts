export interface ApiItem {
  id: number;
  name: string;
  url: string;
  token?: string;        
  status?: 'success' | 'failure';
  responseTime?: number;
  addedAt?: number; 
}