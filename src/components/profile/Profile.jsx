

function Profile({ user }) {
    return (
        <div>
            <h2>Perfil de usuario</h2>
            <h3>{user.name}</h3>
            <h3>{user.bootcamp}</h3>
            <h3>{user.role}</h3>
        </div>
    )
}

export default Profile