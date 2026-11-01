router()

these consist of various methods like
router.push():- navigate to a new route and add it to the browser history stack


router.replace(): navigate to a new route but replace the current entry in the browser
router.refresh():- re-fetches server data and re-render the current route without
router.back():navigates to the previous page in the browser history
router.forward():moves forward in the broswer history of stack


1. router.push()
- Navigates to a new route.
- Adds a new entry to browser history.
- When the user clicks the Back button, they can return to the previous page.

2. router.replace()
- Navigates to a new route.
- Replaces the current browser history entry.
- The user cannot return to the replaced page using the Back button.

3. router.refresh()
- it reloads the full page without re rendering the full page

4. router.back() navigate the previous page in the browseer history

5. router.forward() navogate the forward page in the browser history


difference between redirect and push
redirect is used form the server side where as the router.push is used in the client side
navigation  redirect() immediate redirect and router.push() client navigation
stop execution redirect () yes router.push() No
common use of the redirect is authentication and router.push() button navigation

