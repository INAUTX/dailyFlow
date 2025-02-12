npm install react-native-sqlite-storage

Manejo de tokens-
npm install react-native-crypto
npm install buffer --save
npm install react-native-randombytes --save


src/
 ├─ app/
 │   ├─ domain/
 │   │   ├─ auth/
 │   │   │   ├─ entities/
 │   │   │   │   └─ User.ts
 │   │   │   ├─ repositories/
 │   │   │   │   └─ AuthRepository.ts
 │   │   │   └─ usecases/
 │   │   │       ├─ LoginUseCase.ts
 │   │   │       └─ RegisterUseCase.ts
 │   │   ├─ habitos/
 │   │   │   ├─ entities/
 │   │   │   │   └─ Habit.ts
 │   │   │   ├─ repositories/
 │   │   │   │   └─ HabitRepository.ts
 │   │   │   └─ usecases/
 │   │   │       ├─ CreateHabitUseCase.ts
 │   │   │       └─ GetHabitsUseCase.ts
 │   │   ├─ registros/
 │   │   │   ├─ entities/
 │   │   │   │   └─ RegistroCumplimiento.ts
 │   │   │   ├─ repositories/
 │   │   │   │   └─ RegistrosRepository.ts
 │   │   │   └─ usecases/
 │   │   │       └─ ...
 │   │   ├─ notificaciones/
 │   │   │   ├─ entities/
 │   │   │   │   └─ Notificacion.ts
 │   │   │   ├─ repositories/
 │   │   │   │   └─ NotificacionesRepository.ts
 │   │   │   └─ ...
 │   ├─ infra/
 │   │   ├─ auth/
 │   │   │   ├─ AuthAPI.ts
 │   │   │   └─ AuthRepositoryImpl.ts
 │   │   ├─ db/
 │   │   │   ├─ database.ts
 │   │   │   ├─ createTables.ts
 │   │   │   └─ ...
 │   │   ├─ habitos/
 │   │   │   ├─ HabitosSQLite.ts
 │   │   │   └─ HabitRepositoryImpl.ts
 │   │   ├─ registros/
 │   │   │   ├─ RegistrosSQLite.ts
 │   │   │   └─ RegistrosRepositoryImpl.ts
 │   │   ├─ notificaciones/
 │   │   │   ├─ NotificacionesSQLite.ts
 │   │   │   └─ NotificacionesRepositoryImpl.ts
 │   │   └─ storage/
 │   │       ├─ secureStorage.ts   // usando react-native-cryptoT
 │   │       └─ ...
 │   ├─ application/
 │   │   └─ store/
 │   │       ├─ index.ts
 │   │       ├─ auth/
 │   │       │   ├─ auth.slice.ts
 │   │       │   └─ auth.thunks.ts
 │   │       ├─ habits/
 │   │       │   ├─ habits.slice.ts
 │   │       │   └─ habits.thunks.ts
 │   │       └─ ...
 │   └─ presentation/
 │       ├─ navigation/
 │       │   ├─ AppNavigator.tsxT
 │       │   ├─ AuthStack.tsx
 │       │   └─ HomeStack.tsx
 │       ├─ screens/
 │       │   ├─ LoginScreen.tsx
 │       │   ├─ RegisterScreen.tsx
 │       │   ├─ HomeScreen.tsx
 │       │   └─ CreateHabitScreen.tsx
 │       └─ components/ (reutilizables)
 └─ App.tsx
