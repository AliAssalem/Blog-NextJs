import LoginForm from "./LoginForm"

const LoginPage = () => {
  return (
    <section className="container fix-height m-auto px-7 flex items-center justify-center">
      <div className="m-auto bg-white rounded-lg p-5 w-full md:w-2/3">
        <h1 className="text-3xl font-bold text-gray-800 mb-5">Login</h1>
        <LoginForm/>
      </div>
    </section>
  )
}

export default LoginPage
