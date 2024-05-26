create table public.profiles (
  id uuid not null references auth.users on delete cascade,
  first_name text,
  last_name text,

  primary key (id)
);

alter table public.profiles enable row level security;



create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( (select auth.uid()) = id );

create policy "Users can update own profile."
  on profiles for update
  using ( (select auth.uid()) = id );


create policy "Profiles are viewable by users who created them."
  on profiles for select
  using ( (select auth.uid()) = id );

// This will return nothing while the user is logged out
const { data } = await supabase.from('profiles').select('id, username, avatar_url, website')

--  After the user is logged in, this will only return
--  the logged-in user's data - in this case a single row
-- const { error } = await supabase.auth.signIn({ email })
-- const { data: profile } = await supabase
--   .from('profiles')
--   .select('id, username, avatar_url, website')



If you want to add a row to your public.profiles table every time a user signs up, you can use triggers.
If the trigger fails however, it could block the user sign ups - so make sure that the code is well-tested.

Example:

-- inserts a row into public.profiles
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, first_name, age)
  values (new.id, new.raw_user_meta_data ->> 'first_name', new.raw_user_meta_data['age']::integer);
  return new;
end;
$$;

-- trigger the function every time a user is created
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();