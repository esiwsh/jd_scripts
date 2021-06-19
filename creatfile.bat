for %%c in (*.js) do (
	echo %~d0>%%c.bat && echo cd %cd% >>%%c.bat && echo node %%c >>%%c.bat
)