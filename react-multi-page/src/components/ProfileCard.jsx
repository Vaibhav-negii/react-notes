function ProfileCard({profile}){
    return(
          <>
        <img src = {profile.avatar_url} alt = {profile.login}/>
         <p>{profile.name || profile.login}</p>
        <p>follower: {profile.followers}</p>
        <p>Bio:{profile.bio}</p>
        </>
    )
}
export default ProfileCard;