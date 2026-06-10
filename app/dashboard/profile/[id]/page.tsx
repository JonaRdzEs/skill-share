interface Props {
  params: Promise<{id: string}>
}

export default async function ProfilePage({ params }: Props) {

  const {id} = await params;
  console.log(id);
  return (
    <div>
      <h1>Profile page {id}</h1>
      
    </div>
  );
}