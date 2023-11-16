import React from 'react'

const UserContext = React.createContext()

export default UserContext

/**
prop drilling concept. to overcome this we use context.

<UserContext>
    <Login /> 
    <Card>
        <Data /> 
    <Card /> 
<UserContext /> 

Here UserContext becomes the provider. It provides all the variables which can be used by all the components defined within UserContext.

*/