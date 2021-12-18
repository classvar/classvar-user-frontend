export interface CardListProps {
  loading: boolean;
  courses?: {
    id: number;
    title: string;
  }[];
}
