'use client'
import { LoginForm } from 'components/LoginForm';
import { Auth } from 'templates/Auth/Auth';

export default function LoginPage() {
  return (
    <Auth>
      <LoginForm />
    </Auth>
  );
}
