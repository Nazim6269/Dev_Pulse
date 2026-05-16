interface ProfileInfoProps {
  name: string;
  email: string;
}

export function ProfileInfo({ name, email }: ProfileInfoProps) {
  return (
    <div>
      <h1 className="text-[18px] font-semibold leading-tight tracking-tight text-foreground">{name}</h1>
      <p className="mt-0.5 text-[13px] text-muted-foreground/60">{email}</p>
    </div>
  );
}
