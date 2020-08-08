# General requirements

[] 1. User should, at all times, know that something is being loaded (e.g. spinner/fake content)

[] 2. The application should be responsive and work both on desktop and mobile devices

[] 3. Use this API: [api](https://github.com/netguru/heroes-api) It exposes both REST and GraphQL services. It's up to you which one you chose.

[] 4. Your app should look more or less like on the designs: [designs](https://netguru.invisionapp.com/share/8YU95KFGH9C).  It doesn't have to be pixel-perfect :) (designs contain views for both desktop and mobile screens)

	[] 4.1. Heroes view
		[] a. User should be able to see a list of heroes along with their avatar, name, type, and description
		[] b. User should be able to load more heroes. It's up to you whether you chose infinite scroll or `load more` button.
		[] c. If there are no more heroes to load, user should see that’s the end of the list and no more requests should be triggered.

	[] 4.2. Add Hero View
		[] a. User should be able to open the modal by clicking "Add hero" button in the main dashboard.
		[] b. User should be able to input hero details:
			[] – avatar (url to avatar image),
			[] – full name,
			[] – description,
			[] – type (by selecting type from the available options in the dropdown), 
		[] c. User should see an error when fields are not filled
		[] d. Heroes types available in dropdown select should be fetched from Heros API endpoint.
		[] e. User should be able to save the details by clicking the "Save" button. After the hero is saved modal should be closed and the hero should be added to the heroes list. 
		
	​[] 4.3. Hero Details View
		[] a. The details view should be a modal accessible by clicking on any item on the Heroes list.
		[] c. The modal should contain the following information: full name, type & description
		[] d. Additionally, the user should be able to delete the hero by clicking "Delete hero" button. After the hero is removed modal should be closed and heroes list should be updated.

[] 5. Your project should contain README.md with details on how to set-up your application

[] 6. We should be able to run your app using only two commands: 
	[] – yarn install
	[] – yarn start

[] 7. Nice to have:
	[] – Hero Details modal should be accessible by manually entering the page using its URL address (e.g. /details/:id)
	
[] 8. Tests:
	[] 	– You don't have to aim for 100% code coverage, but we'd love to see your skill in this field. So please test at least one feature. You can use react-resting-library for this. 

END: Once you’re ready to show us your work, pack the client application to dropbox or drive and send the link over by email.