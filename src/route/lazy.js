export async function lazy(){
    const module = await import(`./../Page/Dashboard/${role}/${role}DashboardPage`);
        return {
            Component: module.default,
               
        }
}