function Page({ params }: { params: { id: string } }) {
  return <div>
    <h1>Profile</h1>
    <p>ID: {params.id}</p>
  </div>
}

export default Page;