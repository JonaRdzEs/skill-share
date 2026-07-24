interface Props {
  userId: string;
}

export function UserProfile({ userId }: Props) {
  return (
    <section>
      <h1>Profile for user {userId}</h1>

    </section>
  );
}