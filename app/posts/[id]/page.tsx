"use client"

import { use } from 'react';
import { useData } from '../../utils/client';

type DataType = {
  content: string;
  message: string;
};

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // params をアンラップ
  const { data, isLoading, isError } = useData<DataType>(`api/posts/${id}`);

  if (isLoading) return <div className="m-auto text-center text-4xl font-bold">Loading...</div>;
  if (isError) return <div className="m-auto text-center text-4xl font-bold">Error</div>;
  return (<>
  <div>
    <p className="m-auto text-center text-4xl font-bold">
    id:{id} message:{data!.message} content:{data!.content}
    </p>
    </div>
  
  </>);
}